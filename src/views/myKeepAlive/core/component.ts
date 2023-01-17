import { ConcreteComponent } from 'vue';
import { isFunction } from '@vue/shared';
export function getComponentName(
  Component: ConcreteComponent,
  includeInferred = true,
): string | false | undefined {
  return isFunction(Component)
    ? // @ts-ignore
      Component.displayName || Component.name
    : Component.name || (includeInferred && Component.__name);
}
