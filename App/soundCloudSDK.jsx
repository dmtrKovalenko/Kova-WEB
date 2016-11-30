export default {
    searchTracks(filter, callback){
        SC.get('/tracks', {
            q: filter.query,
            linked_partitioning: 1,
            offset: 0,
            limit: 50,
        }).then(function(tracks) {
            console.log(tracks);

            callback(tracks.collection);
        });
    },
    
    streamSong(id, callback){
        SC.stream('/tracks/' + id).then(function(player){
            window.SCplayer = player;
            SCplayer.play();

            if(callback){
                callback();
            } 
        }.bind(this));
    },

    getVolume(){
        if(!window.SCplayer){
            return 1;
        }

        return window.SCplayer.getVolume();
    },    

    setVolume (value){
        window.SCplayer.setVolume(value);
    },

    play(){
        window.SCplayer.play();
    },

    pause(){
        window.SCplayer.pause();
    },

    seek(value){
        window.SCplayer.seek(value);
    },

    getCurrentTime(){
        return window.SCplayer.currentTime();
    },

    onTimeChanged(callback){
        window.SCplayer.on('time', callback);
    },
    
    onPlayEnded(callback){
        window.SCplayer.on('finish', callback);
    },
    
    onPlayStarted(callback){
        window.SCplayer.on('buffering_end', callback);
    }
}