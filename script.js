var url = 'https://spreadsheets.google.com/feeds/list/1j2K7lx7h_yQxCW9iwKBHVp2pxrB5nYeQv1onP9QVbZg/1/public/values?alt=json';

        $.getJSON(url, function(data) {
            var headInfo = data.feed.title.$t;
            $('#heading').html('<h1>' + headInfo + '</h1>');
            var entryData = data.feed.entry;
            jQuery.each(entryData, function() {
                $('.tBody').append('<div class="tRow"><div class="tCell">' + this.gsx$name.$t + '</div><div class="tCell">' + this.gsx$department.$t + '</div><div class="tCell">' + this.gsx$salary.$t + '</div></div>');

            })

        })