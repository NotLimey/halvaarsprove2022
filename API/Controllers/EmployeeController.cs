using API.Dtos.Employee;
using API.Helpers;
using API.Models;
using API.Services;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class EmployeeController : Controller
    {
        private readonly IUserService _userService;
        private readonly JwtService _jwtService;
        private readonly IConfiguration _configuration;
        private readonly IEmployeeService _employeeService;
        private readonly AuthorizationService _authorizationService;

        public EmployeeController(
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

        [HttpGet("Employee")]
        public async Task<IActionResult> GetEmployeesAsync([FromHeader] string Key, string Id)
        {
            var key = _configuration.GetValue<string>("employee_key");
            if (key != Key) return Unauthorized(new { message = "Auth key is not valid" });

            // Implement get employee by id here

            return Ok(await _employeeService.GetEmployeesAsync());
        }

        [HttpPost("Employee")]
        public async Task<IActionResult> PostEmployeeAsync([FromBody] CreateEmployeeDto dto)
        {
            try
            {
                var user = await _authorizationService.IsAuthenticated(Request);
                if (user == null) return Unauthorized(new { message = "user null" });

                Employee employee = new Employee
                {
                    Email = dto.Email,
                    Name = dto.Name,
                    Role = dto.Role,
                    Image = dto.Image
                };

                Employee result = await _employeeService.AddEmployeeAsync(employee);
                return Ok(result);
            }
            catch (Exception e)
            {
                Console.Write(e);
                return Unauthorized();
            }
        }

        [HttpDelete("Employee")]
        public async Task<IActionResult> DeleteEmployeeAsync(string id)
        {
            try
            {
                var user = await _authorizationService.IsAuthenticated(Request);

                if (user == null) return Unauthorized(new { message = "user null" });

                var guid = Guid.Parse(id);
                return Ok(await _employeeService.RemoveEmployeeAsync(guid));
            }
            catch (Exception e)
            {
                Console.Write(e);
                return Unauthorized();
            }
        }
    }
}
