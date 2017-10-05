using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace RWA.CardosoConsorcio.Models
{
    public class ContatoViewModel
    {
        [Required(ErrorMessage = "O campo {0} é obrigatório")]
        [DisplayName("Nome")]
        [StringLength(40, MinimumLength = 2)]
        public String Nome { get; set; }

        [Required(ErrorMessage = "O campo {0} é obrigatório")]
        [DisplayName("E-mail")]
        [EmailAddress]
        [StringLength(60, MinimumLength = 2)]
        public String Email { get; set; }

        [Required(ErrorMessage = "O campo {0} é obrigatório")]
        [DisplayName("Telefone")]
        [StringLength(15, MinimumLength = 2)]
        public String Telefone { get; set; }

        [Required(ErrorMessage = "O campo {0} é obrigatório")]
        [DisplayName("Mensagem")]
        [StringLength(300, MinimumLength = 3)]
        public String Mensagem { get; set; }
    }
}