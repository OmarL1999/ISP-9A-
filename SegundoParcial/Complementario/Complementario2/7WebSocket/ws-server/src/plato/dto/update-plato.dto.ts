import { PartialType } from '@nestjs/mapped-types';
import { CreatePlatoDto } from './create-plato.dto';
import { IsBoolean, IsNotEmpty, IsOptional } from 'class-validator';


export class UpdatePlatoDto extends PartialType(CreatePlatoDto) {
    @IsBoolean()
    @IsOptional()
    estado?: boolean;
}
