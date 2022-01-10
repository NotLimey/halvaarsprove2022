using API.Dtos;
using API.Helpers;
using API.Models;
using API.Services;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]

    public class AuthController : Controller
    {
        private readonly IUserService _userService;
        private readonly JwtService _jwtService;
        private readonly IConfiguration _configuration;
        private readonly IEmployeeService _employeeService;
        private readonly AuthorizationService _authorizationService;

        public AuthController(
            IUserService userService,
            JwtService jwtService,
            IConfiguration configuration,
            IEmployeeService employeeService,
            AuthorizationService authorizationService
        )
        {
            _userService = userService;
            _jwtService = jwtService;
            _configuration = configuration;
            _employeeService = employeeService;
            _authorizationService = authorizationService;
        }

        [HttpPost("Register")]
        public async Task<IActionResult> Register(RegisterDto dto)
        {
            if (!_authorizationService.IsValidEmail(dto.Email))
                return BadRequest(new { message = "Email is not valid" });

            User user = new User
            {
                Name = dto.Name,
                Email = dto.Email,
                Password = BCrypt.Net.BCrypt.HashPassword(dto.Password)
            };

            var result = await _userService.CreateUserAsync(user);

            return Created("success", result);
        }

        [HttpPost("Login")]
        public async Task<IActionResult> Login(LoginDto dto, bool Remember)
        {
            User user = await _userService.GetUserByEmailAsync(dto.Email);
            if (user == null) return NotFound();

            if (!BCrypt.Net.BCrypt.Verify(dto.Password, user.Password))
            {
                return BadRequest(new { message = "Invalid credentials, password" });
            }

            var jwt = _jwtService.Generate(user.Id);

            Response.Cookies.Append("jwt", jwt, new CookieOptions { HttpOnly = true });

            return Ok(new { message = "success" });
        }

        [HttpGet("User")]
        public async Task<IActionResult> GetUserAsync(string? Id)
        {
            try
            {
                var user = await _authorizationService.IsAuthenticated(Request);

                if (user == null) return Unauthorized(new { message = "user null" });

                if (Id != null)
                {
                    return Ok(await _userService.GetUserAsync(Guid.Parse(Id)));
                }

                return Ok(user);
            }
            catch (Exception e)
            {
                Console.Write(e);
                return Unauthorized();
            }

        }

        [HttpPost("Logout")]
        public IActionResult Logout()
        {
            Response.Cookies.Delete("jwt");

            return Ok(new
            {
                message = "Successfully logged out!"
            });
        }
    }
}
