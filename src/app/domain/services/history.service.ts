import { CityRepository } from "./protocols/city-repository";
import { Storage } from '@ionic/storage';
import { City } from '../entities/city.model';

const NOME_BASE_DADOS = 'HistóricoPesquisas';

export class HistoricoService {
  constructor(
    private readonly cityRepo: CityRepository,
    private storage: Storage
  ) {}

  
  async iniciarHistorico(): Promise<City[]> {
    await this.storage.create();
    const historicoBusca = await this.storage.get(NOME_BASE_DADOS);
    if (historicoBusca !== null) {
        return await this.storage.get(NOME_BASE_DADOS);
    }
    return await this.limparHistorico();
  }

  
  async adicionarAoHistorico(id: number): Promise<City[]> {
    const novaCidade = await this.cityRepo.getById(id);
    let historico = await this.storage.get(NOME_BASE_DADOS);

    historico = historico.filter((entry, index, arr) => entry.id !== id);

    historico.unshift(novaCidade);
    return await this.storage.set(NOME_BASE_DADOS, historico);
  }

  
  async limparHistorico(): Promise<City[]> {
    await this.storage.set(NOME_BASE_DADOS, []);
    return await this.storage.get(NOME_BASE_DADOS);
  }
}
