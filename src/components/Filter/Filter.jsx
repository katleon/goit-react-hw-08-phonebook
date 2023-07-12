import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from '../../redux/Actions';
import { Filterbox, Input, Span } from './Filter.styled';

function Filter() {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const onFilter = event => {
    dispatch(filterContacts(event.target.value));
  };
  return (
    <Filterbox>
      <label>
        <Input
          onChange={onFilter}
          type="text"
          value={filter}
          name="filter"
          placeholder=" "
        />
        <Span>Find contacts by name</Span>
      </label>
    </Filterbox>
  );
}

export default Filter;
