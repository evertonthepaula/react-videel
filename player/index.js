import React, { useState, useRef, lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { Video, Controls, Btn, InputRange, CurrentSpeed } from './styles';

const SpeedOptions = lazy(() => import('./components/SpeedOptions'));

function Player({ src }) {
  const videEl = useRef(null);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurentTime] = useState(0);
  const [currentVolume, setCurentVolume] = useState(0);
  const [currentSpeed, setCurrentSpeed] = useState(1);

  function handleClickVideo(e) {
    stopEvents(e);
    tooglePlay();
  }

  function handleContextMenu(e) {
    stopEvents(e);
  }

  function stopEvents(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  function canPlay() {
    setCurentVolume(videEl.current.volume * 100);
    setDuration(videEl.current.duration);
  }

  function timeUpdate() {
    setCurentTime(videEl.current.currentTime);
  }

  function changeTimeline(e) {
    videEl.current.currentTime = e.target.value;
  }

  function tooglePlay() {
    return videEl.current.paused ? play() : pause();
  }

  function play() {
    videEl.current.play();
  }

  function pause() {
    videEl.current.pause();
  }

  function refresh() {
    videEl.current.currentTime = 0;
    play();
  }

  function mute() {
    videEl.current.muted = !videEl.current.muted;
  }

  function changeAudio(e) {
    volume(e.target.value / 100);
    setCurentVolume(e.target.value);
  }

  function volume(vol) {
    videEl.current.volume = vol;
  }

  function speed(val = 1) {
    videEl.current.playbackRate = val;
    setCurrentSpeed(val);
  }

  return (
    <>
      <Video
        ref={videEl}
        onClick={handleClickVideo}
        onContextMenu={handleContextMenu}
        onCanPlay={canPlay}
        onTimeUpdate={timeUpdate}
        src={src}
      >
        <track src="" kind="captions" srcLang="pt" label="legendas" />
      </Video>

      <InputRange
        min="0"
        max={duration}
        value={currentTime}
        onChange={changeTimeline}
      />

      <Controls>
        <Btn onClick={tooglePlay}>play</Btn>

        <Btn onClick={refresh}>refresh</Btn>

        <Btn onClick={mute}>mute</Btn>

        <CurrentSpeed>
          {currentSpeed} x
          <Suspense fallback="">
            <SpeedOptions oncChangeSpeed={speed} currentValue={currentSpeed} />
          </Suspense>
        </CurrentSpeed>

        <InputRange
          label="Audio"
          min="0"
          max="100"
          value={currentVolume}
          onChange={changeAudio}
        />
      </Controls>
    </>
  );
}

Player.propTypes = {
  src: PropTypes.string.isRequired
};

export default Player;
