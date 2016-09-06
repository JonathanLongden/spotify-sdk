import Client from './../Client';
import TrackHandler from './TrackHandler';

const client = new Client();
const track = new TrackHandler(client);

describe('TrackHandler', () => {

  it('should return a valid object and has the base methods', (done) => {
    track.search('R U mine?', {limit: 5}).then((trackCollection) => {
      expect(trackCollection.first).toBeAn('function')
      done();
    });
  });

  it('should return a valid track', (done) => {
    track.search('R U mine?', {limit: 5}).then((trackCollection) => {
      const track = trackCollection.first();
      expect(track.name).toBeAn('string')
      done();
    });
  });

});
