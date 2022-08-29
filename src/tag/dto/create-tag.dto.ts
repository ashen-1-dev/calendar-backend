import {IsString, IsNotEmpty} from "class-validator";

export class CreateTagDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  
  @IsString()
  @IsNotEmpty()
  description: string;
}