import { CreatePlatoDto } from './create-plato.dto';
declare const UpdatePlatoDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreatePlatoDto>>;
export declare class UpdatePlatoDto extends UpdatePlatoDto_base {
    estado?: boolean;
}
export {};
