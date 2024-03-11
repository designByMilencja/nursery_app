import mongoose, { Schema, model, models, Document } from "mongoose";

export interface IUser extends Document {
  id: string;
  name: string;
  surname: string;
  email: string;
  password: string;
  role: string;
  isVerified: boolean;
  resetPasswordToken: string;
  resetPasswordTokenExpiry: Date;
  verifyToken: string;
  verifyTokenExpiry: Date;
  licenceNumber?: string;
  companyName?: string;
}

mongoose.connect(process.env.MONGODB_URI as string);
mongoose.Promise = global.Promise;

export const UserSchema = new Schema<IUser>(
  {
    id: String,
    name: { type: String, max: 100 },
    surname: { type: String, max: 100 },
    email: { type: String, unique: true, max: 100 },
    password: String,
    role: String,
    isVerified: Boolean,
    resetPasswordToken: String,
    resetPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
    licenceNumber: {
      type: String,
      required: function (this: IUser) {
        return this.role === "employee";
      },
    },
    companyName: {
      type: String,
      required: function (this: IUser) {
        return this.role === "employer";
      },
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model<IUser>("User", UserSchema)
export { User };
