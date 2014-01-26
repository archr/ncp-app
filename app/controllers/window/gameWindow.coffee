args = arguments[0] or {}

mano = args.data.oponente.mano

drawCards = ->
	$.card1.image = "images/mazo/nouns/#{mano[0]}.png"
	$.card2.image = "images/mazo/verbs/#{mano[1]}.png"
	$.card3.image = "images/mazo/nouns/#{mano[2]}.png"


if args.data.start
	$.notificaton.text = 'Tu empiezas, pregunta!'
	$.question.show()
else
	$.notificaton.text = 'Tu respondes, espera a tu oponente'
	$.answer.show()
	drawCards()



