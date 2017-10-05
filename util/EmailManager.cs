using System;
using System.Net;
using System.Net.Mail;
using System.Text;
using RWA.CardosoConsorcio.Models;

namespace RWA.CardosoConsorcio.util
{
    public class EmailManager
    {        
        public void Enviar(ContatoViewModel model, RWASettings settings)
        {
            string mensagem = string.Format(
                "<h2>Mensagem via website RWA Consórcio Cardoso</h2>" +
                "<p>Um cliente entrou em contato conosco</p>" +
                "<hr />" +
                "<p>Nome: {0}</p>" +
                "<p>Email: {1}</p>" +
                "<p>Telefone: {2}</p>" +
                "<p>Mensagem: {3}</p>" +
                "<hr />" +
                "<h3>RWA Consórcio Cardoso {4} - Website</h3>"
                , model.Nome, model.Email, model.Telefone, model.Mensagem, DateTime.Now.Year);

            EnviarEmail(
                settings.Email,
                settings.Senha,
                settings.EmailTo,
                "Contato via website RWA Consórcio Cardoso",
                mensagem,
                settings.SMTP,
                int.Parse(settings.Porta));
        }

        private void EnviarEmail(string emailFrom, string senha, string emailTo, string assunto, string mensagemFinal, string smtp, int porta)
        {            
            MailMessage objEmail = new MailMessage();            
            objEmail.From = new MailAddress(emailFrom);    
            objEmail.To.Add(emailTo);        
            objEmail.Priority = MailPriority.Normal;        
            objEmail.IsBodyHtml = true;
            objEmail.Subject = assunto;            
            objEmail.Body = mensagemFinal;            
            objEmail.SubjectEncoding = Encoding.GetEncoding("ISO-8859-1");            
            objEmail.BodyEncoding = Encoding.GetEncoding("ISO-8859-1");
            
            SmtpClient objSmtp = new SmtpClient();
            objSmtp.Host = smtp;            
            objSmtp.DeliveryMethod = SmtpDeliveryMethod.Network;
            objSmtp.UseDefaultCredentials = false;
            objSmtp.EnableSsl = false;
            objSmtp.Port = porta;
            objSmtp.Credentials = new NetworkCredential(emailFrom, senha);
            objSmtp.Send(objEmail);
            objSmtp.Dispose();
        }
    }
}