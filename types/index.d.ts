export interface SidebarLink {
    imgURL: string;
    route: string;
    label: string;
  }
  
  export interface Reset{
    email: string;
  }
  export interface LoginData extends Reset {
    email: string;
    password: string;
  }
  
  export interface UserRegister extends LoginData {
    name: string;
    surname: string;
    role: string;
    isVerified: boolean;
    companyName?: string;
    licenceNumber?: string;
    resetPasswordToken: string;
    resetPasswordTokenExpiry: string;
    verifyToken: string;
    verifyTokenExpiry: string;
  }
  