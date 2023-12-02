'use client';
import { Modal, Box } from '@mui/material';
import Cross from './Cross';
import React, { useState } from 'react'
import { useGlobalContext } from '@/content/globalContext';

const ScheduleDemo = () => {
  const { openScheduleDemo, setOpenScheduleDemo } = useGlobalContext();
  return (
    <div className='block lg:w-fit w-full'>
      <Modal
        sx={{
          display: !openScheduleDemo ? 'none' : 'block',
        }}
        open={true}
        onClose={() => setOpenScheduleDemo(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          className='customModalContainer'
        >
          {/* <!-- Calendly inline widget begin --> */}
          <div className="calendly-inline-widget" data-url="https://calendly.com/techforing/techforing-workwise-demo?hide_gdpr_banner=1" style={{ minWidth: '320px', height: '100%' }}>
          </div>
          <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async>

          </script>
          {/* <!-- Calendly inline widget end --> */}
          <Cross
            onClick={() => setOpenScheduleDemo(false)}
            style={{
              position: 'absolute',
              top: '2rem',
              right: '2rem',
            }}
          />
        </Box>
      </Modal>
    </div>
  )
}

export default ScheduleDemo