using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace back_itsense.Models
{
    public class Product
    {
        public int ProductId { get; set; }
        public string ProductNombre { get; set; }

        public string ProductEstado { get; set; }
        public string ProductFechaIngreso { get; set; }

        public string ProductFechaEgreso { get; set; }

    }
}