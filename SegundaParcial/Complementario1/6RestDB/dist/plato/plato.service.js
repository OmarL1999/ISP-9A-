"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlatoService = void 0;
const plato_entity_1 = require("./entities/plato.entity");
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const typeorm_2 = require("@nestjs/typeorm");
let PlatoService = class PlatoService {
    constructor(platoRepository) {
        this.platoRepository = platoRepository;
        this.logger = new common_1.Logger('PlatoService');
    }
    async create(createPlatoDto) {
        try {
            const plato = this.platoRepository.create(createPlatoDto);
            await this.platoRepository.save(plato);
            return plato;
        }
        catch (error) {
            console.log(error);
            if (error.code === '23505')
                throw new common_1.BadRequestException(error.detail);
            this.logger.error(error);
            throw new common_1.InternalServerErrorException('Error no esperado');
        }
    }
    findAll() {
        return this.platoRepository.find({});
    }
    async findOne(id) {
        const plato = await this.platoRepository.findOneBy({ id });
        if (!plato)
            throw new common_1.NotFoundException(`plato ${id} no encontrado`);
        return plato;
    }
    async update(id, updatePlatoDto) {
        const plato = await this.platoRepository.preload(Object.assign({ id: id }, updatePlatoDto));
        if (!plato)
            throw new common_1.NotFoundException(`plato ${id} no encontrado`);
        try {
            await this.platoRepository.save(plato);
            return plato;
        }
        catch (error) {
            console.log(error);
        }
    }
    async remove(id) {
        const plato = await this.findOne(id);
        await this.platoRepository.remove(plato);
    }
};
PlatoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(plato_entity_1.Plato)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], PlatoService);
exports.PlatoService = PlatoService;
//# sourceMappingURL=plato.service.js.map