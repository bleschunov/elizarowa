import { useState, useEffect } from "react"

const useTotal = ({values, errors}) => {
    const [price, setPrice] = useState(0)

    const { 
        workStart, 
        workFinish, 
        walk, 
        walkTime, 
        homework, 
        drawing } = values
   

    useEffect(() => {
        // Добавить нолик в начало, если нужен
        const addZeroFromStartIfNeeded = (time) => {
            if (time.length === 4) return '0' + time
            else return time
        }

        const getSecondsFromMidnight = (start, finish) => {
            const [sh, sm] = start.split(':')
            const [fh, fm] = finish.split(':')
            // Сколько времени прошло с 00:00
            let s = sh*3600 + sm*60
            let f = fh*3600 + fm*60
            // Если финиш раньше старта
            // Прибавить сутки к финишу
            if (f <= s) f += 24*3600

            return [s, f]
        }

        const getWorktimePrice = (timeline) => {
            let res = 0
            let tax = 700
            let flag = false
            timeline.reduce((prev, next) => {
                if ( prev[1] === 's') {
                    flag = true
                }

                if (flag) {
                    if ( prev[1] !== 'f') {
                        res += (next[0] - prev[0]) / 3600 * tax
                    } else {
                        flag = false
                    }
                }

                if ( next[1].startsWith('bp') ) {
                    tax = tax === 700 ? 600 : 700
                }

                return next
            }, [0, 'bp0'])

            return res
        }

        if (Object.keys(errors).length === 0) {
            let totalPrice = 0

            const start = addZeroFromStartIfNeeded(workStart)
            const finish = addZeroFromStartIfNeeded(workFinish)

            const [s, f] = getSecondsFromMidnight(start, finish)
            
            // Временные точки смены тарифа
            // В стуках их 4 штуки
            const bp1 = 9 * 3600
            const bp2 = 22 * 3600
            const bp3 = 9 * 3600 + 24 * 3600
            const bp4 = 22 * 3600 + 24 * 3600

            const timeline = [
                [s, 's'], 
                [f, 'f'], 
                [bp1, 'bp1'], 
                [bp2, 'bp2'], 
                [bp3, 'bp3'], 
                [bp4, 'bp4']
            ].sort((a, b) => a[0] - b[0])

            totalPrice += getWorktimePrice(timeline)

            if (walk && walkTime !== '') {
                totalPrice += walkTime * 100
            }

            if (homework) totalPrice += 700
            if (drawing) totalPrice += 800

            totalPrice = Math.floor(totalPrice)

            setPrice(totalPrice)
        } else {
            setPrice(0)
        }
    }, [values, errors])

    return price
}

export default useTotal