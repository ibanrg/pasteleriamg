using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text;

namespace PasteleriaMG.Data
{
    public class AppConfig
    {
        [JsonProperty("EMAIL")]
        public EmailSettings Email { get; set; }
        [JsonProperty("API")]
        public ApiSettings Api { get; set; }
        [JsonProperty("ADCONFIG")]
        public AdSettings Ad { get; set; }
        [JsonProperty("APPSETTINGS")]
        public AppSettings AppSettings { get; set; }
        [JsonProperty("Notification")]
        public NotificationSettings Notification { get; set; }
    }

    public class NotificationSettings
    {
        public string Username { get; set; }
        public string Password { get; set; }
        public string BPC { get; set; }
        public string ABSENTISMOS { get; set; }
        public string PARTEHORAS { get; set; }
        public string CALIDAD { get; set; }

    }

    public class EmailSettings : ServerSettings
    {

        [JsonProperty("PlantillaXSL")]
        public string PlantillaXSL { get; set; }
        [JsonProperty("PlantillaXML")]
        public string PlantillaXML { get; set; }

        public EmailFrom From { get; set; }

        public class EmailFrom
        {
            public string Address { get; set; }
            public string Name { get; set; }
        }
    }

    public class ServerSettings
    {
        [JsonProperty("baseServer")]
        public string BaseServer { get; set; }
        [JsonProperty("user")]
        public string User { get; set; }
        [JsonProperty("password")]
        public string Password { get; set; }
    }

    public class ApiSettings : ServerSettings { }

    public class AdSettings
    {
        public string BaseUrl { get; set; }
        public string Tenant { get; set; }
        public string ClientId { get; set; }
        public string ReturnUrl { get; set; }
        public string ClientSecret { get; set; }
    }

    public class AppSettings
    {
        [JsonProperty("Secret")]
        public string Secret { get; set; }
    }
}
