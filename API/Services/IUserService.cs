using API.Models;

namespace API.Services
{
    public interface IUserService
    {
        Task<User> GetUserAsync(Guid id);

        Task<User> GetUserByEmailAsync(string email);

        Task<User> CreateUserAsync(User user);
    }
}
