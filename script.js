<script language="javascript" type="text/javascript"><!--
var news = new Array([ "Link 1 escreva a descri��o para o Primeiro link" , "url_1.html" ] ,
[ "Link 2 escreva a descri��o para o Segundo link" , "url_2.html" ] ,
[ "Link 3 escreva a descri��o para o terceiro link" , "url_3.html" ] ,
[ "Link 4 escreva a descri��o para o Quarto link" , "url_4.html" ] ,
[ "Voc� Pode Criar quantos links voc� Quiser" , "url_5.html" ] , 
[]
) ;
//--></script>
<!-- fim da edi��o -->


<script language="javascript" type="text/javascript"><!--
var ticker_layer = false ;
var step_time = 25 ;
var freeze_time = 2000 ;
var news_index = 0 ;
var title_index = 0 ;
var end_title = "_" ;
var title_max_size = 62 ;
var pause = false ;
var freeze_timeout_id ;
var step_timeout_id ;
var step_char_length = 1 ;

function prepare(){
	// aki se muda o tamanho
	var container_size = 425 ;
	for ( var i = 0 ; i < news.length - 1 ; i++ ){
		t = news[i][0] ;
		t = t.replace(/\&quot;/gi,'"');
		t = t.replace(/\&amp;/gi,'&');
		t = t.replace(/\&#039;/gi,'\'');

		var dummy = document.createTextNode( t ) ;
		document.getElementById('dummy').appendChild( dummy ) ;
		var size = document.getElementById('dummy').offsetWidth ;

		while( size > container_size ){
			t = t.substring( 0 , title_max_size ) ;
			t = t.substring( 0 , t.lastIndexOf( ' ' ) ) ;
			t += '...';

			clear_element( 'dummy' ) ;
			var dummy = document.createTextNode( t ) ;
			document.getElementById('dummy').appendChild( dummy ) ;
			size = document.getElementById('dummy').offsetWidth ;
		}
		clear_element( 'dummy' ) ;

		news[i][0] = t ;
	}
}

function clear_element( name ){
	/* esvaziar dummy */
	if ( document.getElementById( name ) ){
		while ( document.getElementById( name ).lastChild != null ){
			child = document.getElementById( name ).lastChild ;
			document.getElementById( name ).removeChild( child ) ;
		}
	}
}

function begin_roll_ticker(){
	window.setTimeout( "roll_ticker()" , step_time ) ;
}

function move_next(){
	if ( title_index == 0 ){
		// �ndice de not�cias j� est� na posi��o certa, apenas dar play
		freeze_timeout_id = window.setTimeout( "roll_ticker()" , t ) ;
	}
	else{
		title_index = 0 ;
		next_line(0) ;
	}
}

function move_prev(){
	if ( title_index == 0 ){
		// �ndice de not�cias j� foi movido; corrigir
		news_index == 0 ? news_index = news.length - 2 : news_index-- ;
		prev_line(0) ;
	}
	else{
		title_index = 0 ;
		prev_line(0) ;
	}
}

function fill_line(){
	step_char_length = news[news_index][0].length - title_index ;
	step_timeout_id = window.setTimeout( "roll_ticker()" , step_time ) ;
}

function t_next( obj ){
	pause = false ;
	freeze_timeout_id = window.clearTimeout( freeze_timeout_id ) ;
	step_timeout_id = window.clearTimeout( step_timeout_id ) ;
	step_timeout_id = window.setTimeout( 'move_next()' , step_time ) ;
}

function t_prev( obj ){
	pause = false ;
	freeze_timeout_id = window.clearTimeout( freeze_timeout_id ) ;
	step_timeout_id = window.clearTimeout( step_timeout_id ) ;
	step_timeout_id = window.setTimeout( 'move_prev()' , step_time ) ;
}

function t_pause( obj ){
	pause = !pause ;
	if ( pause ){
		// limpar timeout se uma not�cia j� estiver presente
		if ( title_index == 0 && freeze_timeout_id ){
			window.clearTimeout( freeze_timeout_id ) ;
		}
		else{
			window.clearTimeout( step_timeout_id ) ;
			step_timeout_id = window.setTimeout( "fill_line()" , step_time ) ;
		}
	}
	else{
		if ( title_index == 0 ){
			next_line(0) ;
		}
	}
}

function roll_ticker(){
	var title ;
	if ( title_index == 0 ){
		while ( document.getElementById('ticker').lastChild != null ){
			child = document.getElementById('ticker').lastChild ;
			document.getElementById('ticker').removeChild( child ) ;
		}
	}

	if ( news_index < news.length + 2 && news[news_index][0].length >= title_index ){
		title = news[ news_index ] ;

		document.getElementById('ticker_anchor').setAttribute( "href" , title[1] ) ;

		s_text = title[0].substring( title_index  , title_index + step_char_length ) ;
		title_index += step_char_length ;

		if ( step_char_length > 1 ){
			step_char_length = 1 ;
		}

		if ( document.getElementById('ticker').lastChild != null ){
			if ( document.getElementById('ticker').lastChild.nodeValue == "_" ){
				child = document.getElementById('ticker').lastChild ;
				document.getElementById('ticker').removeChild( child ) ;
			}
		}

		txt = document.createTextNode( s_text ) ;
		document.getElementById('ticker').appendChild( txt ) ;

		if ( title[0].length > title_index ) {
			if ( title_index % 10 != 0 ){
				txt = document.createTextNode( "_" ) ;
				document.getElementById('ticker').appendChild( txt ) ;
			}
		}

		step_timeout_id = window.setTimeout( "roll_ticker()" , step_time ) ;
	}
	else{
		title_index = 0 ;

		if ( !pause ){
			next_line( freeze_time ) ;
		}
	}
}

function next_line( t ){
	news_index >= news.length - 2 ? news_index = 0 : news_index++ ;
	freeze_timeout_id = window.setTimeout( "roll_ticker()" , t ) ;
}

function prev_line( t ){
	news_index == 0 ? news_index = news.length - 2 : news_index-- ;
	freeze_timeout_id = window.setTimeout( "roll_ticker()" , t ) ;
}

//--></script>

<style type="text/css"><!--
body { margin: 0; }
a { color: #cc3300; font-family: verdana; font-size: 11px; font-weight: bold; text-decoration: none; }
#tickerContent { margin: 0; padding: 0; border-collapse: collapse; border-spacing: 0 0; }
#tickerCell { width: 515px; height: 25px; line-height: 25px; padding: 0; margin: 0; vertical-align: middle; }
#buttonsCell { width: 25px; height: 25px; line-height: 25px; padding: 0 0 3px 0; margin: 0; vertical-align: middle; text-align: right; }
#dummy { color: #cc3300; font-family: verdana; font-size: 11px; font-weight: bold; text-decoration: none; margin: 0; visibility: hidden; }
--></style>
</head>
<body onLoad="prepare();begin_roll_ticker();">
<table id="tickerContent">
<tr>
<td width="10">&nbsp;</td>
<td id="tickerCell">
<a href="#" id="ticker_anchor" target="_top" name="ticker_anchor"><span id="ticker"></span></a>
<td id="buttonsCell">
<a href="javascript:t_prev(this);"><img src="icn-anterior-4x8.gif" width="4" height="8" border="0" title="Anterior"></a>
<a href="javascript:t_pause(this);"><img src="icn-pausa-6x8.gif" width="6" height="8" border="0" title="Pausa"></a>
<a href="javascript:t_next(this);"><img src="icn-proximo-4x8.gif" width="4" height="8" border="0" title="Pr�xima"></a>
</td>
</tr>
</table>

<span id="dummy"></span>