import React, { PureComponent } from 'react';
import { IntlProvider, injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import msg from '../../locale';
class Intl extends PureComponent {
  render() {
    const { children, locale, localeMessage } = this.props;
    console.log(localeMessage);
    return (
      <IntlProvider key={locale} locale={locale} messages={localeMessage}>
        {children}
      </IntlProvider>
    );
  }
}

function chooseLocale(val) {
  console.log(val);
  switch (val) {
    case 'en-US':
      return msg['en-US'];
    case 'zh-CN':
      return msg['zh-CN'];
    default:
      return msg['zh-HK'];
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    locale: state.root.language,
    localeMessage: chooseLocale(state.root.language),
  };
};

export default connect(mapStateToProps)(Intl);
