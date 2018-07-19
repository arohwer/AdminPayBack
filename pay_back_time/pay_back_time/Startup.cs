using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(pay_back_time.Startup))]
namespace pay_back_time
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
