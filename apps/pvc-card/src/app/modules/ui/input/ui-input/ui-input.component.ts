import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'aio-ui-input',
  templateUrl: './ui-input.component.html',
  styleUrls: ['./ui-input.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiInputComponent {
  @Input()
  public label = '';
  @Input()
  public labelAlt = '';
  @Input()
  public placeholder = '';
  @Input()
  public type: 'text' | 'number' = 'text';
}
