import React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

export default function useEqSelectorAndDispatch(selectorReturningObject) {
  const dispatch = useDispatch();
  const obj = selectorReturningObject ? useSelector(selectorReturningObject, shallowEqual) : {};
  return { dispatch, ...obj };
}
