import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ScrollPositionService {
  private positions = new Map<string, number>();

  save(key: string, position: number): void {
    this.positions.set(key, position);
  }

  get(key: string): number | undefined {
    return this.positions.get(key);
  }
}