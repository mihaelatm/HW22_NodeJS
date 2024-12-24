export namespace UserManagement {
  export namespace Admin {
    export class AdminUser {
      constructor(
        public name: string,
        public email: string,
        public isSuperAdmin: boolean
      ) {}

      changeAccess(access: boolean) {
        this.isSuperAdmin = access;
      }
    }
  }
}
