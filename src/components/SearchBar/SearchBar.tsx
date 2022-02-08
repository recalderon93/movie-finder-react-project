import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import { ChangeEvent, useRef } from 'react';
import Button from '@mui/material/Button';

interface SearchBarProps {
  value: string;
  setValue: (input: string) => void;
}
export default function SearchBar({ value, setValue }: SearchBarProps) {
  const valueRef = useRef<string>(value);
  function onChangeHandler(input: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    valueRef.current = input.currentTarget.value;
  }

  function searchHandler() {
    setValue(valueRef.current);
  }
  return (
    <Paper
      component="form"
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: '65vw',
        minWidth: '350px',
        borderRadius: 80,
        mt: 3,
        mb: 3,
      }}
      elevation={4}
    >
      <InputBase
        sx={{ ml: 3, flex: 1 }}
        placeholder="Search Movies"
        inputProps={{
          'aria-label': 'search google maps',
        }}
        defaultValue={value}
        onChange={onChangeHandler}
        autoFocus
        type="text"
      />

      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <Button
        variant="contained"
        onClick={searchHandler}
        sx={{ height: 50, width: 100, borderTopRightRadius: 40, borderBottomRightRadius: 40 }}
        disableElevation
      >
        Search
      </Button>
    </Paper>
  );
}
