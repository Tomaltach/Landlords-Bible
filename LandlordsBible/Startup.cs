using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(LandlordsBible.Startup))]
namespace LandlordsBible
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
