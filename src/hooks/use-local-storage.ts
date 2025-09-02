'use client';

import { useState, useEffect } from 'react';

function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T | ((val: T) => T)) => void] {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.error(error);
      return initialValue;
    }
  });

  // useEffect to update local storage when the state changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
        try {
        // Allow value to be a function so we have same API as useState
        const valueToStore =
            typeof storedValue === 'function'
            ? storedValue(storedValue)
            : storedValue;
        // Save state
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
        // A more advanced implementation would handle the error case
        console.error(error);
        }
    }
  }, [key, storedValue]);

  // We need to make sure we're on the client before we can use window.
  // This will run on mount and update the state with the value from localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
        try {
            const item = window.localStorage.getItem(key);
            if (item) {
                setStoredValue(JSON.parse(item));
            }
        } catch (error) {
            console.error(error)
        }
    }
  }, [key]);

  return [storedValue, setStoredValue];
}

export default useLocalStorage;
