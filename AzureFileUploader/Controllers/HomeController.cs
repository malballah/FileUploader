using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using AzureFileUploader.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using System.IO;

namespace AzureFileUploader.Controllers
{
    [Authorize]
    public class HomeController : Controller
    {
        private readonly IHostingEnvironment _env;

        public HomeController(IHostingEnvironment env)
        {
            _env = env;
        }
        public IActionResult Index()
        {
            return View();
        }

        [RequestSizeLimit(100_000_000)]
        public async Task<string> UploadFile()
        {
            try
            {
                if (Request.Form.Files.Count > 0)
                {
                    var file = Request.Form.Files[0];
                    using (var stream = new FileStream(_env.ContentRootPath + "\\UploadedFiles\\"+file.FileName, FileMode.Create))
                    {
                        await file.CopyToAsync(stream);
                    }
                }
                return string.Empty;
            }
            catch (Exception exp){
                return "Cannot save file to disk";
            }
        }
    }
}