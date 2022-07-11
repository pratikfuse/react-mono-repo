export class UserService {
  logout() {
    localStorage.removeItem("access_token");
  }
}

const userService = new UserService();

export default userService;
