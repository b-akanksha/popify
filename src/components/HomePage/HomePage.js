import { Button, Tab, Tabs } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTopItemsThunks } from '../../redux/thunks';
import empty from '../../assets/search.gif';
import './HomePage.css';

const HomePage = ({ handleLogout }) => {
  const dispatch = useDispatch();
  const {
    userData: {
      data,
      mostPopular,
      leastPopular,
    },
  } = useSelector((state) => state.popify);

  const [type, setType] = React.useState('artists');
  const [term, setTerm] = React.useState('short_term');
  const [value, setValue] = React.useState(0);
  const [tabValue, setTabValue] = React.useState(0);

  const terms = {
    0: 'short_term',
    1: 'medium_term',
    2: 'long_term',
  };

  const types = {
    0: 'artists',
    1: 'tracks'
  };

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
    setTerm(terms[newValue]);
  };

  const handleTypeTabChange = (event, newValue) => {
    setTabValue(newValue);
    setType(types[newValue]);
  };
  React.useEffect(() => {
    dispatch(getTopItemsThunks(type, term, 50));
  }, [type, term]);

  return (
    <div className='homepage'>
      <div className='logoutContent'>
        <Button onClick={handleLogout} className='button'>
          Logout
        </Button>
      </div>
      <div className='tabContent'>
      <Tabs
          value={tabValue}
          onChange={handleTypeTabChange}
          variant='scrollable'
          scrollButtons='auto'
          aria-label='scrollable auto tabs'
          TabIndicatorProps={{
            sx: {
              backgroundColor: '#4acace',
            },
          }}
        >
          <Tab label='Artists' />
          <Tab label='Tracks' />
        </Tabs>
      </div>
      <div className='tabContent'>
        <Tabs
          value={value}
          onChange={handleTabChange}
          variant='scrollable'
          scrollButtons='auto'
          aria-label='scrollable auto tabs'
          TabIndicatorProps={{
            sx: {
              backgroundColor: '#4acace',
            },
          }}
        >
          <Tab label='Short term' />
          <Tab label='Medium term' />
          <Tab label='Long term' />
        </Tabs>
        {data.length > 0 ? (
          <>
            <div className='result_score'>
              {[mostPopular, leastPopular].map((item, index) => <div className='result_tab' key={item.id}>
                <h3>{index === 0 ? `Most popular ${type.slice(0,-1)}` : `Least popular ${type.slice(0,-1)}` }</h3>
                <img
                  src={item.images.url}
                  alt='popular artist'
                  className='artist_image'
                />
                <p>
                  <span className='artist-name'>{item.name}</span>{' '}
                  (Score: {item.popularity})
                </p>
              </div>)}
            </div>
            <h3>- Top 5 popular {type} -</h3>
            <div className='result_score all_data'>
              {data.slice(0,5).map((item) => (
                <div className='result_tab' key={item.id}>
                  <img
                    src={item.images.url}
                    alt='popular artist'
                    className='artist_image'
                  />
                  <p>
                    <span className='artist-name'>{item.name}</span> (Score:{' '}
                    {item.popularity})
                  </p>
                </div>
              ))}
            </div>
            <h3>- Top 5 least popular {type} -</h3>
            <div className='result_score all_data'>
              {data.slice(-5).sort((a,b) => a.popularity - b.popularity).map((item) => (
                <div className='result_tab' key={item.id}>
                  <img
                    src={item.images.url}
                    alt='popular artist'
                    className='artist_image'
                  />
                  <p>
                    <span className='artist-name'>{item.name}</span> (Score:{' '}
                    {item.popularity})
                  </p>
                </div>
              ))}
            </div>
            <footer>
        <p>
          <i>
            Made by{" "}
            <b>
              <a
                href="https://www.linkedin.com/in/akanksha-bhat-255b4315a/"
                target="_blank"
                rel="noreferrer"
              >
                Akanksha
              </a>
            </b>
            . Powered by{" "}
            <b>
              <a
                href="https://developer.spotify.com/"
                target="_blank"
                rel="noreferrer"
              >
                Spotify API
              </a>
            </b>
          </i>
        </p>
      </footer>
          </>
        ) : (
          <div className='failed-content'>
            <img src={empty} alt='empty' className='search-image' />
            <p>Try Again</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
