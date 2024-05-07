import {render, screen, fireEvent} from '@testing-library/angular'
import '@testing-library/jest-dom';

import { TestBed } from '@angular/core/testing';
import { CounterComponent } from './counter.component';

describe('Counter', () => {
	
	beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterComponent],
    }).compileComponents();
  });

  test('should render counter', async () => {
    await render(CounterComponent, {
			componentProperties: {counter: 5}
    })

    expect(screen.getByText('Current Count: 5')).toBeInTheDocument();
  });

  test('should increment the counter on click', async () => {
    await render(CounterComponent, {
      componentProperties: {counter: 5},
    })

    fireEvent.click(screen.getByText('+'))

    expect(screen.getByText('Current Count: 6')).toBeInTheDocument();
  });
});