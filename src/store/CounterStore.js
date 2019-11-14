import {observable} from 'mobx';

class CounterStore {
  @observable count = 1;
}

export default new CounterStore();
