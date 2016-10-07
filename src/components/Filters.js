import React, { Component, PropTypes } from 'react'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css'
//хорошо, но тут появляется много логики, время разбивать на более мелкие компоненты
class Filters extends Component {
    static propTypes = {
        articles: PropTypes.array
    };

    state = {
        selected: null,
        range: {
            from: null,
            to: null
        }
    }

    handleChange = selected => this.setState({ selected: selected })

    handleDayClick = (e, day) => {
        const range = DateUtils.addDayToRange(day, this.state.range);
        this.setState({ range: range });
    }

    render() {
        const options = this.props.articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        const { range } = this.state;

        return (
            <div>
                <Select
                    options = {options}
                    value = {this.state.selected}
                    onChange = {this.handleChange}
                    multi={true}
                />
                <DayPicker
                    numberOfMonths={ 2 }
                    selectedDays={ day => DateUtils.isDayInRange(day, range) }
                    onDayClick={ this.handleDayClick }
                />
                {range.from ? 'Showing articles from ' + range.from.toLocaleDateString() : null}
                {range.to ? ' to ' + range.to.toLocaleDateString() : null}
            </div>
        )
    }
}

export default Filters
