using System.Text.Json.Serialization;

namespace blazor_app.Models {
    public class Product {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }

        [JsonConverter(typeof(IntToStringConverter))]
        public int Quantity { get; set; }
    }
}