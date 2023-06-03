import { CreatePlatoDto } from './dto/create-plato.dto';
import { UpdatePlatoDto } from './dto/update-plato.dto';
import { Plato } from './entities/plato.entity';
import { Repository } from 'typeorm';
export declare class PlatoService {
    private readonly platoRepository;
    private readonly logger;
    constructor(platoRepository: Repository<Plato>);
    create(createPlatoDto: CreatePlatoDto): Promise<Plato>;
    findAll(): Promise<Plato[]>;
    findOne(id: string): Promise<Plato>;
    update(id: string, updatePlatoDto: UpdatePlatoDto): Promise<Plato>;
    remove(id: string): Promise<void>;
}
