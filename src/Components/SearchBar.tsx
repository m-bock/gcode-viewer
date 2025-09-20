import React from 'react';
import styled from '@emotion/styled';

type Props = {
    value: string
    onSearch: (search: string) => void
}

const StyledRoot = styled.div`
    padding: 20px;
`

const StyledInput = styled.input`
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  outline: none;
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);

  &:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 2px rgba(59,130,246,0.5);
  }
`


export const SearchBar: React.FC<Props> = ({ value, onSearch }) => {
    return (
        <StyledRoot>
            <StyledInput
                type="text"
                placeholder="Filter"
                value={value}
                onChange={(e) => onSearch(e.target.value)} />
        </StyledRoot>
    )
}