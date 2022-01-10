using API.Models;
using API.Services;

namespace API.Helpers
{
    public class AuthorizationService
    {
        private readonly JwtService _jwtService;
        private readonly IUserService _userService;

        public AuthorizationService(
            JwtService jwtService, 
            IUserService userService)
        {
            _jwtService = jwtService;
            _userService = userService;
        }

        public async Task<User?> IsAuthenticated(HttpRequest request)
        {
            var jwt = request.Cookies["jwt"];
            if (jwt == null) return null;

            var token = _jwtService.Verify(jwt);

            var userId = Guid.Parse(token.Issuer);

            var user = await _userService.GetUserAsync(userId);
            return user;
        }

        public bool IsValidEmail(string email)
        {
            try
            {
                var addr = new System.Net.Mail.MailAddress(email);
                return addr.Address == email;
            }
            catch
            {
                return false;
            }
        }

        public bool IsGuidValid(string value)
        {
            Guid x;
            return Guid.TryParse(value, out x);
        }
    }
}
