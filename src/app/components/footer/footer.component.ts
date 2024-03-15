import { Component } from '@angular/core';
import { Playlist } from 'src/app/models/playlist';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {


  myPlaylist: Playlist[] = [
    {
      title: 'Ammadi',
      link: 'https://music.youtube.com/watch?v=pFUI4P17LIE&si=z1Z7-l85YFrEI7As'
    },
    {
      title: 'Ammayi',
      link: 'https://music.youtube.com/watch?v=xSU1-_gocNg&si=nz6HbCZlcPp-8cNS'
    },
    {
      title: 'Hulala',
      link: 'https://music.youtube.com/watch?v=KSy-Gh3TFsM&si=MDhlac26_pjAD-Ga'
    },
    {
      title: 'Tanu Nenu',
      link: 'https://music.youtube.com/watch?v=uJApTJ6CGTw&si=hIhG8xDyhYuyjL9u'
    },
    {
      title: 'Kadalani',
      link: 'https://music.youtube.com/watch?v=TIDbKoHVfew&si=Khe8AqFD7LTzKXGX'
    },
    {
      title: 'Siri Vennala',
      link: 'https://music.youtube.com/watch?v=F2566mvd-o0&si=9NsHLh1iy7azum8E'
    },
    {
      title: 'Pranavalaya',
      link: 'https://music.youtube.com/watch?v=JJaiKWPmDik&si=JC0SdRWKrNdvK1hk'
    },
    {
      title: 'O Rendu Prema Meghalu',
      link: 'https://music.youtube.com/watch?v=_EOIXDHrjHw&si=TrMnS--70NdyVrmh'
    },
    {
      title: 'Oh Priya Priya',
      link: 'https://music.youtube.com/watch?v=ASahUxsb4QQ&si=yr1sgMWqDKoNj8CR'
    },
    {
      title: 'Nenu Nuvvantu',
      link: 'https://music.youtube.com/watch?v=ANrTbPl6-Ew&si=qrpcx5Cy1P4L-S1n'
    },
    {
      title: 'Pilla Ra',
      link: 'https://music.youtube.com/watch?v=k-3RVmy9ZJc&si=GbNw5stAMRIdjEs_'
    },
    {
      title: 'Ninnu Choose Anadham lo',
      link: 'https://music.youtube.com/watch?v=J7NIYS6A3Pc&si=gEBgwjatHDAcylV-'
    },
    {
      title: 'Nalona Pongenu Narmada',
      link: 'https://music.youtube.com/watch?v=1RyPEFpCb0Y&si=v-EtDRFuBszo-ocW'
    },
    {
      title: 'Pachachadanamey',
      link: 'https://music.youtube.com/watch?v=889dZRbNPaE&si=WuXecMJaT_2lKvW9'
    },
    {
      title: 'Darshana',
      link: 'https://music.youtube.com/watch?v=NjQWctpXU-g&si=lzaV4ThDMpAYKM6P'
    },
    {
      title: 'Kadalalle',
      link: 'https://music.youtube.com/watch?v=TryjW9pFipk&si=hspv_SxjGwAvrFkB'
    },
    {
      title: 'Hrudayama',
      link: 'https://music.youtube.com/watch?v=0yqX_DNWT64&si=9bVyntY1rCMsAi_k'
    },
    {
      title: 'Malare',
      link: 'https://music.youtube.com/watch?v=-GyOKmoLbng&si=ZRPf42-Iwfl00wfJ'
    },
    {
      title: 'Oy.. Oy..',
      link: 'https://music.youtube.com/watch?v=dGH-YczynDc&si=nV2llkAbXeByrm_f'
    },
    {
      title: 'Uyire',
      link: 'https://music.youtube.com/watch?v=OkBPy5WbAzk&si=e30stJC5m7WeGE9-'
    },
    {
      title: 'Adiye',
      link: 'https://music.youtube.com/watch?v=wvnBHdl5MJo&si=DjtOqxKDYErQoL_g'
    },
    {
      title: 'Kadhaipomma',
      link: 'https://music.youtube.com/watch?v=QUpnrWg_c0U&si=gGjM-6uFRE-6qGZj'
    },
    {
      title: 'Chiru Chiru',
      link: 'https://music.youtube.com/watch?v=ZnkFETFCoDw&si=2MxBWmn7-eOn0CTX'
    },
    {
      title: 'Aagi Aagi',
      link: 'https://music.youtube.com/watch?v=t1dlwy1I2Ws&si=qQdPc7Y8NlEy0wEx'
    },
    {
      title: 'Kanunna Kalyanam',
      link: 'https://music.youtube.com/watch?v=nINsKf5uRyQ&si=a0mtHOTMBXf0AOM2'
    },
    {
      title: 'Yepudo Ninnu',
      link: 'https://music.youtube.com/watch?v=BiTEIdVl34U&si=cTCBR1W-aA2nNYNC'
    },
    {
      title: 'Uyiril Thodum',
      link: 'https://music.youtube.com/watch?v=KwuYnvyf5R8&si=0oMmLCdCTelltLva'
    },
    {
      title: 'Heeriye',
      link: 'https://music.youtube.com/watch?v=SW2uyfNqHg4&si=RcoJ-azyA274KSs7'
    }

  ]

}
