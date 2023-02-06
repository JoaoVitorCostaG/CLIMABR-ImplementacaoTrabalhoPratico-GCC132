import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { City } from '../domain/entities/city.model';
import { SearchCityService } from '../domain/services/search-city.service';
import { HistoricoService } from '../domain/services/history.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  errorMessage = null;
  cities: City[] = [];
  Historico: City[];

  constructor(
    private readonly cityService: SearchCityService,
    private readonly router: Router,
    private readonly HistoryService: HistoricoService
  ) { }

  async onSearch(query: string) {
    try {
      this.errorMessage = null;
      this.cities = await this.cityService.searchByName(query)
    } catch (error) {
      this.errorMessage = error.message
    }
  }

  async ngOnInit() {
    this.Historico = await this.HistoryService.iniciarHistorico();
  }

  async limparHistorico() {
    this.Historico = await this.HistoryService.limparHistorico();
  }

  async onSelect(city: City) {
    this.Historico = await this.HistoryService.adicionarAoHistorico(city.id);
    await this.router.navigateByUrl(`/weather/${city.id}`, { replaceUrl: true })
  }

}
