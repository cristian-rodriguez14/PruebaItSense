using back_itsense.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace back_itsense.Controllers
{
    public class ProductController : ApiController
    {
        public HttpResponseMessage Get()
        {
            string query = @"
                    select ProductId,ProductNombre,ProductEstado,
                    convert(varchar(10),ProductFechaIngreso,120) as ProductFechaIngreso
                    from
                    dbo.Product
                    ";
            DataTable table = new DataTable();
            using (var con = new SqlConnection(ConfigurationManager.
                ConnectionStrings["ItsenseApp"].ConnectionString))
            using (var cmd = new SqlCommand(query, con))
            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(table);
            }

            return Request.CreateResponse(HttpStatusCode.OK, table);


        }

        public string Post(Product pd)
        {
            try
            {
                string query = @"
                    insert into dbo.Product values
                    (
                    '" + pd.ProductNombre + @"'
                    ,'" + pd.ProductEstado + @"'
                    ,'" + pd.ProductFechaIngreso + @"'
                    )
                    ";

                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.
                    ConnectionStrings["ItsenseApp"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }

                return "Producto Ingresado Exitosamente!!";
            }
            catch (Exception)
            {

                return "Producto No Ingresado!!";
            }
        }

        public string Put(Product pd)
        {
            try
            {
                string query = @"
                    update dbo.Product set
                    ProductNombre='" + pd.ProductNombre + @"'
                    ,ProductEstado='" + pd.ProductEstado + @"'
                    where ProductId=" + pd.ProductId + @"
                    ";

                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.
                    ConnectionStrings["ItsenseApp"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }

                return "Producto Actualizado Exitosamente!!";
            }
            catch (Exception)
            {

                return "Producto No Actualizado!!";
            }
        }

        public string Delete(Product pd)
        {
            try
            {
                string query = @"
                    update dbo.Product set
                    ProductFechaEgreso='" + pd.ProductFechaEgreso + @"'
                    where ProductId=" + pd.ProductId + @"
                    ";

                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.
                    ConnectionStrings["ItsenseApp"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }

                return "Salida del Producto Exitosa!!";
            }
            catch (Exception)
            {

                return "Salida no realizada!!";
            }
        }


    }
}
