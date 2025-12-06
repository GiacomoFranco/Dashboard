import { beforeEach, describe, expect, it } from 'vitest';
import { TestBed } from '@angular/core/testing';
import { FilteredRecords } from './filtered-records';
import { EmissionRecords } from './emission-records';
import { TEmissionRecords } from '../core/models/emission-record.type';
import { provideZonelessChangeDetection } from '@angular/core';

describe('FilteredRecords (Vitest)', () => {
  let service: FilteredRecords;
  let mockRecords: TEmissionRecords;

  beforeEach(() => {
    mockRecords = [
      {
        id: 0,
        year: 2020,
        country: 'United States',
        emission_type: 'CO2',
        activity: 'Manufacturing',
        emissions: 2.2
      },
      {
        id: 2,
        year: 2021,
        country: 'Canada',
        emission_type: 'CH4',
        activity: 'Agriculture',
        emissions: 4
      },
      {
        id: 3,
        year: 2020,
        country: 'United States',
        emission_type: 'CH4',
        activity: 'Energy',
        emissions: 4.2
      }
    ];

    TestBed.configureTestingModule({
      providers: [
        FilteredRecords,
        { provide: EmissionRecords, useValue: { records: mockRecords } },
        provideZonelessChangeDetection()
      ]
    });

    service = TestBed.inject(FilteredRecords);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return all records when no filters are applied', () => {
    expect(service.filteredRecords().length).toBe(3);
  });

  it('should filter by activity', () => {
    service.filterByActivity('manufacturing');

    const result = service.filteredRecords();

    expect(result.length).toBe(1);
    expect(result[0].activity).toBe('Manufacturing');
  });

  it('should filter by emission type', () => {
    service.selectEmissionType('co2');
    expect(service.filteredRecords().length).toBe(1);
  });

  it('should filter by country', () => {
    service.selectCountry('canada');
    expect(service.filteredRecords().length).toBe(1);
  });

  it('should filter by year', () => {
    service.slectYear('2021'); // respetando tu método
    expect(service.filteredRecords().length).toBe(1);
  });

  it('should return empty array when no records match filters', () => {
    service.selectEmissionType('N2O');
    expect(service.filteredRecords().length).toBe(0);
  });
});
