import React, {useState} from "react";
import {Container, Alert} from "react-bootstrap";
import shedule from './shedule.json';

export function Shedule() {
	const startDate = new Date(2020, 7, 31);
	const now = new Date();
	const [date, setDate] = useState(new Date(+new Date() + 24 * 60 * 60 * 1000 * (now.getTime() > 17 ? 1 : 0)));
	const weekDay = date.getDay();
	const weekNum = parseInt((date.getTime() - startDate.getTime()) / (7 * 24 * 60 * 60 * 1000) + 1);
	console.log(weekNum);

	function uppercase(string)
	{
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	const day = shedule[weekNum % 2 == 1 ? 'even' : 'odd'][weekDay];

	function SheduleCard({time_start, time_end, item, cab, type, teacher}) {
		return (
			<div style={{ marginBottom: 15, alignItems: 'stretch', display: 'flex', flexDirection: 'row', padding: '14px 20px 14px 12px', borderRadius: 8, boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.04), 0px 4px 16px rgba(0, 0, 0, 0.16)" }}>
				<div style={{paddingRight: 15, borderRight: "2px solid #E5E5E5", display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginRight: 15}}>
					<span style={{textAlign: 'center'}}>{time_start}</span>
					<span style={{textAlign: 'center'}}>{time_end}</span>
				</div>
				<div style={{flex: 4}}>
					<p style={{color: '#007bff', fontWeight: 'bold', fontSize: 12, marginBottom: 5}}>{type.toUpperCase()}</p>
					<div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
						<h5 style={{marginBottom: 0, marginRight: 15}}>{item}</h5>
					</div>
					<p style={{marginBottom: 0}}>{cab} {teacher && `, ${teacher}`}</p>
				</div>
			</div>
		)
	}

	function DateButtons({}) {
		return (
			<div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 25}}>
				<div style={{color: '#007bff'}} onClick={() => setDate(new Date(date.getTime() -  (weekDay == '0' ? '48' : '24') * 60 * 60 * 1000))}>
					День назад
				</div>
				<div style={{color: '#007bff'}} onClick={() => setDate(new Date(date.getTime() + (weekDay == '6' ? '48' : '24') * 60 * 60 * 1000))}>
					День вперед
				</div>
			</div>
		)
	}

	function DateWithButtons() {
		return (
			<div>
				<h2>
					{uppercase(new Date(date).toLocaleString('ru', {month: 'long',day: 'numeric', weekday: 'long'}))}
				</h2>
				<DateButtons />
				<p>{date.toDateString() === new Date().toDateString() && 'Сегодня,'} <b>{weekNum % 2 == 1 ? 'нечетная' : 'четная'}</b> неделя</p>
			</div>
		)
	}

	function NotFound() {
		return (
			<Container>
				<DateWithButtons />
				<div style={{ textAlign: 'center' }}>
					Сегодня пар нет
				</div>
			</Container>
		)
	}

	function PVAlert() {
		return (
			<Alert variant="warning">
				<h5 style={{color: 'black'}}>
					Кампус на Проспекте Вернадского
				</h5>
				<div style={{color: 'black'}}>
					Пары проходят в кампусе на Проспекте Вернадского
					<br/><br/>
					<a target="_blank" href="https://yandex.ru/maps/213/moscow/house/prospekt_vernadskogo_78/Z04Ycg9gSUMAQFtvfXp2cn5qYg==/?ll=37.480068%2C55.673296&z=16">Открыть Яндекс. Карты</a>
				</div>
			</Alert>
		)
	}

	if (!day) return <NotFound />

	return (
		<Container>
			<DateWithButtons />
			{day.PVcampus && <PVAlert />}
			{day.items.map(item => {
				return <SheduleCard {...item}/>
			})}
		</Container>
	)
}