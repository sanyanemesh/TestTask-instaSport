import React, { useState, useCallback, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { getClubs } from '../store';
import FilterButtons from './FilterButtons';
import { ClubsList } from './ClubsList';

const Clubs = () => {
  const clubs = useSelector(getClubs);

  const [filterState, setfilterState] = useState<string>('');
  const [activityState, setactivityState] = useState<string>('');
  const [cityState, setcityState] = useState<string[]>([]);

  const citiesFilter = () => {
    const filters:string[] = clubs.map(item => item.city.title);

    // @ts-ignore
    setcityState([...new Set<string[]>(filters)]);
  }

  const activityFilter = () => {
    const filters:Activity[][] = visibleClubs.map(item => item.activity);

    const filtered = filters.reduce((prev, item) => {
      return prev.concat(item);
    }, []);

    const result = filtered.map(item => item.title)

    // @ts-ignore
    return [...new Set<string[]>(result)]
  }

  const changefilterState = (value: string) => {
    if ( value === filterState) {
      setfilterState('');
      return;
    }

    setfilterState(value);
  }

  const changeActivity = (value: string) => {
    if ( value === activityState) {
      setactivityState('');
      return;
    }

    setactivityState(value);
  }

  const resetFilters = () => {
    setactivityState('');
    setfilterState('');
  }

  const tabs = useCallback(() => {
    return citiesFilter();
  }, [clubs])

  useEffect(() => {
    tabs();
  }, [tabs])

  const visibleClubs = useMemo(() => {
    return clubs.filter(
      item => (
        item.city.title.includes(filterState)
        && item.activity.find((value => Boolean(value.title.includes(activityState))))
      )
    );
  }, [clubs, filterState, activityState])

  const filtersActivity = useMemo(() => {
    return activityFilter();
  }, [visibleClubs]);

  return (
    <>
      <h1>Выбрать клуб по городу или направлению</h1>
      <div className="app">
      <button
      className="button"
      type="button"
      onClick={resetFilters}
      >
        Показать все клубы и направления
      </button>

      <h2>Города:</h2>
      <FilterButtons
        filters={cityState}
        callback={changefilterState}
        type="city"
      />

      <h2>Направления:</h2>
      <FilterButtons
        filters={filtersActivity}
        callback={changeActivity}
        type="activity"
      />

      <ClubsList
        list={visibleClubs}
      />
    </div>
    </>
  );
};

export default Clubs