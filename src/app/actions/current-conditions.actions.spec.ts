import * as fromCurrentConditions from './current-conditions.actions';

describe('loadCurrentConditionss', () => {
  it('should return an action', () => {
    expect(fromCurrentConditions.loadCurrentConditionss().type).toBe('[CurrentConditions] Load CurrentConditionss');
  });
});
