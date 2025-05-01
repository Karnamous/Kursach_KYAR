<?xml version="1.0"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <div class="footer__contacts">
      <a href="tel:{contacts/phone}">
        <xsl:value-of select="contacts/phone"/>
      </a>
      <a href="mailto:{contacts/email}">
        <xsl:value-of select="contacts/email"/>
      </a>
    </div>
  </xsl:template>
</xsl:stylesheet>