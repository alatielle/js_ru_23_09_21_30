import { ADD_COMMENT } from '../constants'
import md5 from 'md5'

export default store => next => action => {
    const { type, payload } = action

    //Плохо, мидлвары должны быть максимально универсальными, стоит делать так, что б их легко можно было переиспользовать
    //плохая логика для генерации id, md5 сгенерит одинаковые id для одинаковых комментов; Лучше просто рандом
    switch (type) {
        case ADD_COMMENT:
            return next({...action, commentId: md5(payload)})
    }

    return next(action)
}
