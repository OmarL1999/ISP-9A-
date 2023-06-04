
import { IsArray, IsIn, IsInt, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, MinLength } from "class-validator";

export class CreatePlatoDto {


    @IsString()
    @IsNotEmpty()
    nombreplato:string;

  

    
}
